import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">app/page.tsx</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            LOL{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Learn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Templates{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Explore starter templates for Next.js.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
        <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.
          - Create video tutorials to help teach users a specific feature or use case. I enjoy doing this because I myself am a visual learner. I enjoy breaking things down into fragments and giving the background context to then help someone else understand complex topics. 
          - Help train and onboard new support teammates. I Enjoy doing this because this has been the core of my career as a people leader  for the past 8 years. I love helping my team up level skills and motivate them to want to learn and grow. 
          - Find and recruit teammates for the support team. I find recruiting so fun, because I understand what it can be like to be on the other side of the table, and I enjoy meeting new people from all walks of life within the industry. 
          - Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub. I miss being this technical, in previous roles I was so hyper fixates on operational excellence that I feel I was losing some of the tech skills I know and love today.

          </h2>
          <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        2. What do you want to learn or do more of at work?
          </h2>
          <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        3. Describe how you solved a challenge or technical issue that you faced in a previous role preferably in a previous support role. How did you determine that your solution was successful?
        </h2>
        <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        4.When would you choose to use Edge Functions, Serverless Functions, or Edge Middleware with Vercel?
        </h2>
        <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        5. Imagine a customer writes in requesting help with a build issue on a framework or technology that youve not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?
        </h2>
        <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
        6. The customer from question 5 replies to your response with the below:
Im so frustrated. Ive been trying to make this work for hours and I just cant figure it out. It must be a platform issue so just fix it for me instead of asking me questions. 
Please write a follow-up reply to the customer.
          </h2>
          <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          7. A customer writes in to the Helpdesk asking How do I do a redirect from the /blog path to https://example.com? Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
          </h2>
          <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          8. A customer is creating a site and would like their project not to be indexed by search engines. Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
          </h2>
          <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          9. What do you think is one of the most common problems which customers ask Vercel for help with? How would you help customers to overcome common problems, short-term and long-term?
          </h2>
          <h2 className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
          10. How could we improve or alter this familiarisation exercise?
          </h2>
      </div>
      <div>
      <h2 className="m-0 max-w-[80ch] text-balance text-sm opacity-50">
        1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.
          - Create video tutorials to help teach users a specific feature or use case. I enjoy doing this because I myself am a visual learner. I enjoy breaking things down into fragments and giving the background context to then help someone else understand complex topics. 
          - Help train and onboard new support teammates. I Enjoy doing this because this has been the core of my career as a people leader  for the past 8 years. I love helping my team up level skills and motivate them to want to learn and grow. 
          - Find and recruit teammates for the support team. I find recruiting so fun, because I understand what it can be like to be on the other side of the table, and I enjoy meeting new people from all walks of life within the industry. 
          - Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub. I miss being this technical, in previous roles I was so hyper fixates on operational excellence that I feel I was losing some of the tech skills I know and love today.

          </h2>

      </div>
    </main>
  );
}
