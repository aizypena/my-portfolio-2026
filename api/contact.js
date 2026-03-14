export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const resendApiKey = process.env.RESEND_API_KEY
  const toEmail = process.env.CONTACT_TO_EMAIL
  const fromEmail = process.env.CONTACT_FROM_EMAIL || 'Portfolio Contact <onboarding@resend.dev>'

  if (!resendApiKey || !toEmail) {
    return res.status(500).json({
      error: 'Server is not configured for contact form delivery.',
    })
  }

  try {
    const rawBody = typeof req.body === 'string' ? JSON.parse(req.body) : req.body
    const name = String(rawBody?.name || '').trim()
    const email = String(rawBody?.email || '').trim()
    const subject = String(rawBody?.subject || '').trim()
    const message = String(rawBody?.message || '').trim()

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required.' })
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' })
    }

    const resendPayload = {
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `Portfolio Contact: ${subject}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        '',
        'Message:',
        message,
      ].join('\n'),
    }

    const resendResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(resendPayload),
    })

    const resendData = await resendResponse.json().catch(() => ({}))

    if (!resendResponse.ok) {
      return res.status(502).json({
        error: resendData?.message || 'Failed to send message.',
      })
    }

    return res.status(200).json({ ok: true, id: resendData?.id })
  } catch {
    return res.status(500).json({ error: 'Unexpected server error.' })
  }
}
