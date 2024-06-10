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
          
      </div>
      <div>
      <h2 className="m-0 max-w-[80ch] text-balance text-sm opacity-50">
        1. From this list, rank your 5 most favourite and 5 least favourite support tasks. Provide a brief explanation for each.
        I Enjoy:
          - Create video tutorials to help teach users a specific feature or use case. I enjoy doing this because I myself am a visual learner. I enjoy breaking things down into fragments and giving the background context to then help someone else understand complex topics. 
          - Help train and onboard new support teammates. I Enjoy doing this because this has been the core of my career as a people leader  for the past 8 years. I love helping my team up level skills and motivate them to want to learn and grow. 
          - Find and recruit teammates for the support team. I find recruiting so fun, because I understand what it can be like to be on the other side of the table, and I enjoy meeting new people from all walks of life within the industry. 
          - Identify, file (and, where possible, resolve) bugs in private and public Vercel/Next.js repos on GitHub. I miss being this technical, in previous roles I was so hyper fixates on operational excellence that I feel I was losing some of the tech skills I know and love today.


          </h2>
      </div>
      <div>
      <h2 className="m-0 max-w-[80ch] text-balance text-sm opacity-50">
          2. What do you want to learn or do more of at work?
          -Front end used to be my passion when learning web development. In my 8 years of experience in people leadership I feel like Ive lost the opportunity to learn and grow in this area as much as some of the individual contributors that I manage. I love people leadership and thats where my passion stands however I would love to be able to do more in this area to keep my technical goals alive. I believe in use it or lose it mentality, therefore I would love the opportunity to be exposed to more front end technical skills. 
        </h2>
      </div>
      <div>
        <h2 className="m-0 max-w-[80ch] text-balance text-sm opacity-50">
        3. Describe how you solved a challenge or technical issue that you faced in a previous role preferably in a previous support role. How did you determine that your solution was successful?
        - As mentioned above, in my previous roles I didnt have much hands on experience with actually working tickets and solving issues for members, I was always the escalation point while my main focus was on driving global impact in processes and procedures. One of the biggest challenges I had to solve in this area was when we had a backlog of over 900 unsolved tickets a day that our support team could not keep up with. Through months of operational excellence projects such as getting more data driven and bringing in BPOs, KPIs and OKRs we were able to use the data from previous months, apply them to knew processes, that helped get this backlog under control. I knew we were successful because we werent blaming headcount anymore and just hiring to try and put out a fire. We were finally taking a proactive approach to backlog instead of playing catchup
        </h2>
      </div>
      <div>
        <h2 className="m-0 max-w-[80ch] text-balance text-sm opacity-50">
        5.Imagine a customer writes in requesting help with a build issue on a framework or technology that you've not seen before. How would you begin troubleshooting this and what questions would you ask the customer to understand the situation better?
        -Generally I would start off with asking as many probing questions as possible so I can get a sense of what is needed from the customer. This can include things like screenshots, or error messages they are seeing. In my experience a customer can reach out and say its broken! That could mean anything, whats broken? What are you seeing? What were you doing when this happened? Ect. From there I would use the details Ive found to check internal KBs or external documentation, do some googling, Im a visual person so I may even try to replicate it and follow an older ticket with the same issue. Once Ive exhausted all resourced I will then reach out for help. 
        </h2>
      </div>
      <div>
        <h2 className="m-0 max-w-[80ch] text-balance text-sm opacity-50">
        6. Im so frustrated. Ive been trying to make this work for hours and I just cant figure it out. It must be a platform issue so just fix it for me instead of asking me questions. 
        - I understand you are frustrated with this and I apologize for any issues you may be facing. Lets work together on this and get you to your resolution. Here Is what I have done for you, (reached out to external team or researched something) Here is what I have found (links/articles) and here is what I am going to do for you moving forward, (include next steps here). (Customers generally react better when you focus on what you can do, and what you have done. Loop them in on this and positively position your follow up to best de-escalate the customer) 
        </h2>
      </div>
      <div>
        <h2>
          7. A customer writes in to the Helpdesk asking How do I do a redirect from the /blog path to example wesbite Please write a reply to the customer. Feel free to add any information about your decision making process after the reply.
          - To set up a redirect atom /blog to your example website you can use vercels redirect configuration within the json file. Here is how you can do that. (I would include screenshots and a code block of what the JSON file looks like and include the link to the documentation where I found it) Generally by default you should have a Json file already created within your vercel project. If you do not have one here is a link to instructions on how to create this. Once that is added we can go into the redirects, add the source, the destination and set this to true or enabled. Once you are finished we can deploy this and check if that worked. (I found all this information in the redirects documentation, there are many ways to redirect pages using verbal but in this example I decided to use the out of the box redirect feature that comes with vercel because it is the easiest to implement. If the customer had specific use cases like serverless functions for example, I would use the instructions specific to that use case.)
        </h2>
      </div>
    </main>
  );
}
