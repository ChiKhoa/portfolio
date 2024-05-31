export const SectionMoreDetails = () => {
  return (
    <section className="flex flex-col gap-y-5 mb-10">
      <h3 className="text-highlight underline text-xl font-medium">
        More details
      </h3>
      <div>
        <h5 className="text-[1.0625rem] text-highlight mb-1">
          Main components
        </h5>
        <p className="indent-4 mb-1">
          Below is some main components in this project.
        </p>
        <p className="indent-4">
          <span className="text-highlight">Blank item: </span>
          <span>
            This is the basic item where you can choose which item will be
            replaced in its place. It will be render when you press enter when
            focus a item or delete all of them.
          </span>
        </p>
        <p className="indent-4">
          <span className="text-highlight">Text item: </span>
          <span>
            Enter whatever you want and then you can format the entire item
            using the available options.
          </span>
        </p>
        <p className="indent-4">
          <span className="text-highlight">Checkbox item: </span>
          <span>
            You can only type text but cannot format in the checkbox item. It
            has a small checkbox for you to check or not.
          </span>
        </p>
        <p className="indent-4">
          <span className="text-highlight">Image item: </span>
          <span>
            You can only type the link of the image and then it will display the
            image for you. You can then select the aspect ratio, adjust its
            size, and if the image is partially hidden, because the intrinsic
            aspect ratio is different from the one you selected, you can use the
            mouse to choose which parts will be displayed.
          </span>
        </p>
      </div>
      <div>
        <h5 className="text-[1.0625rem] text-highlight mb-1">Main pages</h5>
        <p className="indent-4 mb-1">
          In the part below, i will talk more about three main pages:{" "}
          <strong>write</strong>, <strong>published</strong> and{" "}
          <strong>edit</strong>.
        </p>
        <p className="indent-4">
          <span className="text-highlight">Write: </span>
          <span>
            {`This page is where you can write down your words. If you want to
            publish your post, you need to preview it. Just click preview and
            you'll see exactly what your post will display on the published
            page. If you close the tab while writing, don't worry, your draft
            will be saved and you'll be back where you left off.`}
          </span>
        </p>
        <p className="indent-4">
          <span className="text-highlight">Published: </span>
          <span>
            Everyone who has the link can read this post. If you are the author,
            you will see an edit button, allowing you to access the edit page
            where you can edit this post.
          </span>
        </p>
        <p className="indent-4">
          <span className="text-highlight">Edit: </span>
          <span>
            Can only be accessed via the edit button of the published page.
            Here, you can edit content, cancel action, or delete post.
          </span>
        </p>
      </div>
    </section>
  );
};
