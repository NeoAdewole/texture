
export const GET = async ({ request, url }) => {
  const authHeader = request.headers.get('Authorization')
  console.log(authHeader)
  // if (authHeader !== 'MyAuthHeader') {
  //   return new Response(JSON.stringify({ message: "Invalid credentials" }), { status: 401 })
  // }
  // const auth = 

  const taskStatus = String(url.searchParams.get('status') ?? '')
  const search = String(url.searchParams.get('search') ?? '')

  const res = await fetch(`http://localhost:3000/tasks?status=${taskStatus}&search=${search}`, {
    method: 'get',
    headers: new Headers({
      'Authorization': `${authHeader}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    })
  })

  if (res.status === 200) {
    const data = await res.json()
    return new Response(JSON.stringify({ data }), { status: 201 })
  } else {
    return new Response(JSON.stringify({ message: "Error retrieving tasks" }), { status: res.status })
  }

}

export const POST = async ({ request, url }) => {

  // console.log("Request body: ", request.body);
  // console.log(await request.formData());
  // console.log("URL is: ", url);
  // const res = await fetch(`localhost:3000/auth/sinin`, {
  //   method: 'post',
  //   body: request.body,
  //   duplex: 'half'
  // })
  const res = await fetch(`https://dummyjson/posts`)
  console.log("request in server: ", request)
  console.log("response status: ", res.status)
  console.log("response from vortex: ", res.body)
  // return new Response(JSON.stringify({ response: res }))
  // return res

  // return new Response(
  //   JSON.stringify({ message: "Error authenticating credentials. Please check and try again" }),
  //   { error: error }
  // )
}