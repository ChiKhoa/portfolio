const MoreDetails = () => {
  return (
    <section className="flex flex-col gap-y-5 mb-10">
      <h3 className="text-highlight underline text-xl font-medium">
        More details
      </h3>
      <div>
        <h5 className="text-[1.0625rem] text-highlight mb-1">Data Fetching</h5>
        <div className="flex flex-col gap-y-2 indent-4">
          <p>
            Since my database is small, i fetch all the sounds and user&apos;s
            collection on the first page load and then store the data in the
            <strong> context</strong>. Then whenever i want to fetch data, i get
            it back from the context instead of fetching it from the database.
            The data is re-fetching only if the user reloads the page or i can
            trigger it proactively during some specific actions like{" "}
            <strong>uploading a sound</strong> or
            <strong> creating a new collection</strong>.
          </p>
          <p>
            It reduces the number of times I retrieve data from the database.
            With some actions like user adding or removing sounds from
            collection, I update data both in <strong>context</strong> and{" "}
            <strong>database</strong>. So the data is synchronized and i
            don&apos;t need to fetch anything.
          </p>
          <p>
            You may have noticed that in the above <u>Database</u> part, i have{" "}
            <strong>liked_songs </strong>
            column in users table instead of a separate table. That&apos;s
            because in this project, it doesn&apos;t allow users to delete their
            uploaded sound. So if I, the admin, delete the sound on the server
            (using Table Editor in Supabase). The system will do nothing until
            the user who uploaded this sound visits the site again, and then it
            will execute some code to synchronize the data. I haven&apos;t coded
            that function yet but will try to do it in the near future.
          </p>
          <p>
            It&apos;s a bad idea with larger systems and databases, in which
            case having a separate table for <strong>like_songs</strong> is
            better. But I want to try more ways of working with data and
            optimize the number of calls to get data from the database.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreDetails;
