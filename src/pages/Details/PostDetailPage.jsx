import React from 'react';
import { ButtonPost } from '../../components/button-post';
import { TitlePost } from '../../components/title-post';
import { AuthorPost } from '../../components/author-post';
function PostDetailPage() {
  return (
    <>
      <div className="flex items-center gap-x-10 mb-20">
        <img
          src="https://images.unsplash.com/photo-1552375484-214bc246c680?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-[600px] h-[500px] object-cover rounded-lg "
          alt=""
        />
        <div className="flex flex-col gap-y-4">
          <ButtonPost className="p-3 w-[150px] text-white ">
            Knowledge
          </ButtonPost>
          <TitlePost className="text-[30px] leading-14 font-bold w-[500px]">
            Elephant in the Room: The Power of AI in Modern Business
          </TitlePost>
          <div className="flex items-center gap-x-4 text-gray-700">
            <AuthorPost
              author="John Doe"
              date="September 20, 2023"
            ></AuthorPost>
          </div>
        </div>
      </div>
      <div className="p-2 w-[1000px] mx-auto flex flex-col gap-y-8 mb-20">
        <div>
          <h1 className="text-5xl font-bold mb-4">Chapter I</h1>
          <div className="w-[35%] h-[8px] mb-4 bg-primary"></div>
          <p className="leading-10 text-gray-700 mb-4 text-[18px] text-justify">
            In the bustling world of modern business, there's a silent disruptor
            reshaping everything — Artificial Intelligence. But while some
            companies are racing to harness its power, others are pretending
            it’s not even there. AI is no longer a futuristic concept. It's
            already embedded in everyday operations — from personalized product
            recommendations to automated fraud detection. Yet, many business
            leaders still hesitate, citing reasons like cost, complexity, or
            fear of job displacement. Ignoring AI today is like ignoring the
            internet in the early 2000s. Businesses that choose to delay will
            find themselves outpaced by competitors who adapt faster, make
            smarter decisions, and deliver better customer experiences. The
            question is no longer if AI will impact your business — it’s how
            soon, and are you ready?
          </p>
          <img
            src="https://images.unsplash.com/photo-1638910944611-e86d02676f25?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[500px] w-full object-cover rounded-lg mb-10"
          />
          <h1 className="text-5xl font-bold mb-4">Chapter II</h1>
          <div className="w-[35%] h-[8px] mb-4 bg-primary"></div>
          <p className="leading-10 text-gray-700 mb-4 text-[18px] text-justify">
            While some hesitate, others lead. Retail giants use AI to predict
            inventory needs with stunning accuracy. Financial institutions rely
            on machine learning models to spot fraudulent transactions in
            real-time. Even small e-commerce startups are leveraging AI chatbots
            to provide 24/7 customer support. These early adopters are not just
            experimenting — they are reshaping their industries. By integrating
            AI into workflows, they reduce human error, cut operational costs,
            and open new revenue streams. Take, for example, a logistics company
            using AI route optimization. Not only does it cut fuel costs, but it
            also improves delivery speed and customer satisfaction — creating a
            clear competitive edge. AI doesn’t just make things faster. It makes
            them smarter.
          </p>
          <img
            src="https://images.unsplash.com/photo-1645887419173-b5a4f3431d14?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="h-[500px] w-full object-cover rounded-lg mb-10"
          />
          {/* Author */}
          <div className="w-full  h-full bg-white rounded-[40px] shadow-lg">
            <div className="flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1640960543409-dbe56ccc30e2?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-[200px] h-full rounded-[40px] rounded-tr-none rounded-br-none object-cover"
              />
              <div className="flex flex-col justify-center gap-y-2 p-2">
                <p className="font-bold text-black">Long Le</p>
                <p className="text-gray-500 leading-7">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae eveniet quis dolor repudiandae, doloremque itaque.
                  Accusamus atque dolore, minus consequuntur pariatur iure
                  beatae voluptate facilis voluptates consectetur qui sapiente
                  tenetur.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4">Related Posts</h1>
      <div className="w-full h-[4px] mb-4 bg-primary"></div>
      <div className="grid grid-cols-4 gap-x-10 mt-10">
        <div className="flex flex-col gap-y-2">
          <img
            src="https://images.unsplash.com/photo-1554110397-9bac083977c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-lg w-full h-[200px] object-cover"
          />
          <ButtonPost className="w-[100px] h-[40px] text-white p-2 bg-primary">
            Knowledge
          </ButtonPost>
          <TitlePost className="text-black">How to learn React-JS? </TitlePost>
          <div className="flex items-center gap-x-8">
            <AuthorPost
              author="John Doe"
              date="2023-10-01"
              color="text-gray-700"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <img
            src="https://images.unsplash.com/photo-1746311372686-e164b0bcb333?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-lg w-full h-[200px] object-cover"
          />
          <ButtonPost className="w-[100px] h-[40px] text-white p-2 bg-primary">
            Knowledge
          </ButtonPost>
          <TitlePost className="text-black">How to learn React-JS? </TitlePost>
          <div className="flex items-center gap-x-8">
            <AuthorPost
              author="John Doe"
              date="2023-10-01"
              color="text-gray-700"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <img
            src="https://images.unsplash.com/photo-1744522184450-77b96718b074?q=80&w=2115&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-lg w-full h-[200px] object-cover"
          />
          <ButtonPost className="w-[100px] h-[40px] text-white p-2 bg-primary">
            Knowledge
          </ButtonPost>
          <TitlePost className="text-black">How to learn React-JS? </TitlePost>
          <div className="flex items-center gap-x-8">
            <AuthorPost
              author="John Doe"
              date="2023-10-01"
              color="text-gray-700"
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <img
            src="https://images.unsplash.com/photo-1533150783171-ce47d5c2b6ef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-lg w-full h-[200px] object-cover"
          />
          <ButtonPost className="w-[100px] h-[40px] text-white p-2 bg-primary">
            Knowledge
          </ButtonPost>
          <TitlePost className="text-black">How to learn React-JS? </TitlePost>
          <div className="flex items-center gap-x-8">
            <AuthorPost
              author="John Doe"
              date="2023-10-01"
              color="text-gray-700"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default PostDetailPage;
