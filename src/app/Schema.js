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
              "@type": "WebSite",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "What is Trueadblocker and how does it work?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is the best extension that is designed to improve your online experience by eliminating all unwanted ads. It also protects your privacy and saves your data usage. The best part is it is free to use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Does this extension block all types of ads?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, this adblocker Chrome extension blocks all types of ads including banner ads, pop-ups, video ads, and many more.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Can this extension affect your web browsing speed?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It can speed up your page loading by blocking all the unwanted ads.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How to whitelist websites in Trueadblocker?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can whitelist websites by adding them to the allowed list in its settings then it will permit all the ads on those selected sites.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is using this adblocker Chrome extension legal?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, this extension is absolutely legal and safe to use.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is this extension compatible with other websites?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "This adblocker Chrome extension is compatible with most of the major browsers including Google and Firefox.",
                  },
                },
                {
                  "@type": "Question",
                  name: "How can I install Trueadblocker on my web browser?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "It is very simple as you just need to search for the extension or you can visit our website and download the extension from there.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is it safe to use Trueadblocker on multiple sites?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, it is absolutely safe to the extension on multiple browsers including Google Chrome and Firefox.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Is there any free version of Trueadblocker?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, our extension is free to use. You can block all types of ads for free and enhance your online experience.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Why Trueadblocker is better than other adblockers?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "The majority of adblockers can not get rid of unnecessary ads, but by installing our extension you can block all types of hidden ads that may ruin your experience. It not only blocks ads but also protects your browser from dangerous websites.",
                  },
                },

                {
                  "@type": "Question",
                  name: "Who do I contact if I have questions?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "For any questions, you can always contact us",
                  },
                },
              ],
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