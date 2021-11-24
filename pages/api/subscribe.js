// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dc = "us20"
const listId = "1024489d4d"
const mySecret = process.env['MAILCHIMP_API_KEY']

export default async (req, res) => {
  const email = req.body.emailAddress

  try {
    const response = await fetch(`https://${dc}.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${mySecret}`,
      },
      body: JSON.stringify({
        email_address: email,
        status: "subscribed"
      })
    })
    console.log(response.status)
    if (response.status === 200) {
      res.statusCode = 200
      res.end()
    } else if (response.status === 400) {
      res.statusCode = 400
      res.end()
    } else {
      res.statusCode = 404
      res.end()
    }
  } catch { }
}
