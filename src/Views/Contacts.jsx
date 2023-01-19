import React from "react";
import Header from "../components/Header";
import Footer2 from "../components/Footer2";
function Contacts() {
  return (
    <>
      <Header />
      <div className="max-w-[1240px] pt-14 p-2 mx-auto my-10">
        <h1 className="text-4xl">Contacts</h1>
        <h1 className="text-2xl py-3">Heading 1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          odio nisi iste laboriosam labore aliquam id magni repellendus enim
          earum reprehenderit totam, praesentium sunt aut nesciunt iure maxime
          autem vero?
        </p>
        <h1 className="text-3xl py-3">Heading 2</h1>
        <p className="pb-[90px]">
          Lorem ipsum door sit amet consectetur adipisicing elit. Molestiae
          excepturi similique quas quae modi non ea temporibus, magnam fugiat
          suscipit nihil ducimus. Iusto dolore deleniti quo praesentium dolorem
          soluta animi.
        </p>
      </div>

      <Footer2 />
    </>
  );
}

export default Contacts;
