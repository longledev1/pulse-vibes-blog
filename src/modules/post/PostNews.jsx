import Heading from '../../components/heading/Heading';
import { ButtonPost } from '../../components/button-post';
import { AuthorPost } from '../../components/author-post';
import { TitlePost } from '../../components/title-post';
function PostNews() {
  return (
    <div>
      <Heading>Post News</Heading>
      <div className="grid grid-cols-2 gap-x-8 mt-4 mb-20">
        <div className="flex flex-col gap-y-2">
          <img
            src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-lg w-full h-[500px] object-cover"
          />
          <ButtonPost className="w-[100px] h-[40px] text-white p-2 bg-primary">
            Code
          </ButtonPost>
          <TitlePost className="text-black">How to learn React-JS? </TitlePost>
          <div className="flex items-center gap-x-8 font-semibold">
            <AuthorPost
              author="John Doe"
              date="2023-10-01"
              color="text-black"
            />
          </div>
        </div>
        <div className="shadow-lg bg-white rounded-lg p-8">
          <div className=" grid grid-cols-1 gap-y-10">
            <div className="flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-[200px] h-full rounded-lg object-cover "
              />
              <div className="flex flex-col justify-center gap-y-0">
                <ButtonPost className="w-[100px] text-white">Code</ButtonPost>
                <TitlePost className="text-black">
                  How to become an Front-End Developer?
                </TitlePost>
                <div className="flex items-center gap-x-8 ">
                  <AuthorPost
                    author="John Doe"
                    date="2023-10-01"
                    color="text-gray-700"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1747985323857-5c1c16b2ac47?q=80&w=2050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-[200px] h-full rounded-lg object-cover "
              />
              <div className="flex flex-col justify-center gap-y-0">
                <ButtonPost className="w-[100px] text-white">Code</ButtonPost>
                <TitlePost className="text-black">
                  How to become an Front-End Developer?
                </TitlePost>
                <div className="flex items-center gap-x-8 ">
                  <AuthorPost
                    author="John Doe"
                    date="2023-10-01"
                    color="text-gray-700"
                  />
                </div>
              </div>
            </div>
            <hr />
            <div className="flex items-center gap-x-4">
              <img
                src="https://images.unsplash.com/photo-1747997421995-5ff402818f31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-[200px] h-full rounded-lg object-cover "
              />
              <div className="flex flex-col justify-center gap-y-0">
                <ButtonPost className="w-[100px] text-white">Code</ButtonPost>
                <TitlePost className="text-black">
                  How to become an Front-End Developer?
                </TitlePost>
                <div className="flex items-center gap-x-8 ">
                  <AuthorPost
                    author="John Doe"
                    date="2023-10-01"
                    color="text-gray-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[4px] bg-primary"></div>
      <div className="grid grid-cols-4 gap-x-10 mt-10">
        <div className="flex flex-col gap-y-2">
          <img
            src="https://images.unsplash.com/photo-1554110397-9bac083977c6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="rounded-lg w-full h-[200px] object-cover"
          />
          <ButtonPost className="w-[100px] h-[40px] text-white p-2 bg-primary">
            Code
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
            Code
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
            Code
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
            Code
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
    </div>
  );
}

export default PostNews;
