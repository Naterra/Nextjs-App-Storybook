import Document, { Head, Main, NextScript } from 'next/document'
import React from "react";

export default class extends Document {
  render() {
    /**
    * Here we use _document.js to add a "lang" propery to the HTML object if
    * one is set on the page.
    **/

    const metricaCode = `<!-- Yandex.Metrika counter --> <script type="text/javascript" > (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)}; m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)}) (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym"); ym(57130969, "init", { clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true }); </script> <noscript><div><img src="https://mc.yandex.ru/watch/57130969" style="position:absolute; left:-9999px;" alt="" /></div></noscript> <!-- /Yandex.Metrika counter -->`;

    return (
      <html lang='en'>
        <Head>
            <link rel="shortcut icon" type="image/x-icon"   href="/favicon.ico"/>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
                  integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay"
                  crossOrigin="anonymous" />
            {/*Materialize */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            {/* Meta */}
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="google-site-verification" content="" />
            <meta name="yandex-verification" content="" />
            <meta name="p:domain_verify" content="110cb7013e3e143c42c2afe39ab7efdd"/>
        </Head>

        <body>
        {process.env.NODE_ENV === 'production' && (<div dangerouslySetInnerHTML={{ __html: metricaCode }} />)}
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}