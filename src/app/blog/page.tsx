import Banner from "@/app/_components/banner";
import {PostPreviewList} from "@/app/_components/post-preview/post-preview-list";


export default function Index() {


    return (
          <div>
              <div className="relative ">
                  <Banner imageURL={"assets/banner.webp"}/>
                  <div className="absolute inset-0 flex flex-col justify-center items-start text-center pl-8">
                      <h1 className="text-black text-3xl md:text-5xl font-bold mb-4">
                          My Blog
                      </h1>
                      <p className="text-black text-lg md:text-xl mb-6">
                          A look into what I am learning
                      </p>
                  </div>
              </div>
              <div className="relative pt-16">
                  <PostPreviewList />
              </div>
          </div>

    );
}
