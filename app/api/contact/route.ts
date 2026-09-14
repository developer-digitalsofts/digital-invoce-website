import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create the email content
    const emailContent = `
Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}
    `.trim()

    // Open mailto link in a new window (client-side approach)
    // Since we can't actually send emails from a static site, we'll redirect to mailto
    const recipients = ['shahid@digitalsofts.com', 'imran.digitalsoft@gmail.com']
    const mailtoLink = `mailto:${recipients.join(',')}?subject=${encodeURIComponent(`Contact from ${name} - ${subject}`)}&body=${encodeURIComponent(emailContent)}`

    return NextResponse.json(
      { 
        success: true,
        message: 'Form submitted. Opening email client...',
        mailtoLink: mailtoLink
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form' },
      { status: 500 }
    )
  }
}
