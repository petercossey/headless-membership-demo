import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Home() {
  const router = useRouter()
  const [promo, setPromo] = useState('')
  console.log(router.query);
  return (
    <div>
      <Head>
        <title>Headless Membership Demo</title>
        <meta name="description" content="Demo headless store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <h1>Headless Membership Demo</h1>
      </header>
      <main>
        <h2>`router` object</h2>
        <p>The following is the definition of the router object returned by both useRouter and withRouter:</p>
        <ul>
          <li>`query`: `Object` - The query string parsed to an object, including dynamic route parameters. It will be an empty object during prerendering if the page doesn't use Server-side Rendering. Defaults to <code>&#123; &#125;</code></li>
        </ul>
        <p><strong>router.query:</strong></p>
        <code>{JSON.stringify(router.query)}</code>
      </main>
    </div>
  )
}
