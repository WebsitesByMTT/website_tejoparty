import Script from "next/script";
import React from "react";

const Schema = () => {
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How to watch party works?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After installing the extension on your browser, there will be an option to start a watch party, by clicking that you can create a URL link and share it with your friends and start the party."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to watch a movie together online?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "It’s very simple, you and your friends need to install the extension on your browser. Remember you both have a valid account or a subscription to the streaming service where you want to watch a movie like Netflix, Hulu, HBO Max, Prime, and many others. Then you can click on the start watch party button create a link and share it with whom you want to stream. Now, you can enjoy all your favorite movies with you your friends and family. You will feel like they are sitting just behind you and enjoying."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to do Netflix watch party?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "At the Tejowatch party, there is a vast variety of multiple streaming services including Netflix, HBO Max, Paramount, Peacock, and many more. For a Netflix watch party, you need to have a valid account and subscription to Netflix and then select a movie that you want to stream select the watchparty option create a URL link share it with your dear ones, and start a party."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How to host a virtual watch party?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Install the extension choose your most preferred streaming website and select a watch party button. Then, create a URL link send it to your friends, and start a virtual watch party."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How Do I Start a Watch Party in a Web Browser?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Tejowatch party only works in browsers that is Chrome and Firefox. After installing it on your browser, you can choose one streaming platform and start a party."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is installing the Tejowatch party safe?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, it is absolutely safe and the best part is you can use the extension for free. So, enjoy all your favorite movies without any hassle."
                  }
                }
              ]
            },
            null,
            "\t"
          ),
        }}
        id="schema"
      />
    </>
  );
};

export default Schema;