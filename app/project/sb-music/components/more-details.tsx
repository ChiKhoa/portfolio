"use client";

import { useState } from "react";
import Image from "next/image";
import { MoreInfoModal } from "@/components/more-info-modal";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { images } from "@/assets/index";
import { useOpenVFS } from "@/hooks/use-open-vfs";

export const MoreDetails = () => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const openVFS = useOpenVFS([
    { title: "Supabase Buckets", path: images.imgSupabaseBucket },
  ]);

  return (
    <section className="flex flex-col gap-y-5 mb-10">
      <h3 className="text-highlight underline text-xl font-medium">
        More details
      </h3>
      <div>
        <h5 className="text-highlight mb-1">Short description</h5>
        <p>People can listen to audios uploaded by other users.</p>
        <p>
          Only authenticated users can upload their audios, create collections,
          and add audios to collections.
        </p>
        <p>
          People can also add music to favorites and search for music by title.
        </p>
      </div>
      <div>
        <h5 className="text-highlight mb-1">Authentication</h5>
        <p>
          Supabase is used to authenticate users who want to register or log in
          to the web.
        </p>
        <p>Now people can sign up or log in with email or Google account.</p>
      </div>
      <div>
        <h5 className="text-highlight mb-1">Database</h5>
        <p>
          Now i have a simple database with three tables,{" "}
          <strong
            className="underline cursor-pointer"
            onClick={() => setIsOpenModal(true)}
          >
            users
          </strong>
          , <strong>songs</strong> and <strong>collections</strong>.
        </p>
        <div className="my-4">
          <p className="font-medium">Users</p>
          <Table className="my-2">
            <TableHeader className="bg-neutral-800">
              <TableRow>
                <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                <TableHead className="w-[40%]">Data Type</TableHead>
                <TableHead className="w-[40%]">Format</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">id</TableCell>
                <TableCell>uuid</TableCell>
                <TableCell>uuid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">full_name</TableCell>
                <TableCell>text</TableCell>
                <TableCell>text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">avatar_url</TableCell>
                <TableCell>text</TableCell>
                <TableCell>text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">liked_songs</TableCell>
                <TableCell>ARRAY</TableCell>
                <TableCell>_text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">is_admin</TableCell>
                <TableCell>boolean</TableCell>
                <TableCell>bool</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="my-4">
          <p className="font-medium">Songs</p>
          <Table className="my-2">
            <TableHeader className="bg-neutral-800">
              <TableRow>
                <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                <TableHead className="w-[40%]">Data Type</TableHead>
                <TableHead className="w-[40%]">Format</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">id</TableCell>
                <TableCell>uuid</TableCell>
                <TableCell>uuid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">title</TableCell>
                <TableCell>text</TableCell>
                <TableCell>text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">song_path</TableCell>
                <TableCell>text</TableCell>
                <TableCell>text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">image_path</TableCell>
                <TableCell>text</TableCell>
                <TableCell>text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">authors</TableCell>
                <TableCell>text</TableCell>
                <TableCell>text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">user_id</TableCell>
                <TableCell>uuid</TableCell>
                <TableCell>uuid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">duration</TableCell>
                <TableCell>double precision</TableCell>
                <TableCell>float8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">created_at</TableCell>
                <TableCell>timestamp with time zone</TableCell>
                <TableCell>timestamptz</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="my-4">
          <p className="font-medium">Collections</p>
          <Table className="my-2">
            <TableHeader className="bg-neutral-800">
              <TableRow>
                <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                <TableHead className="w-[40%]">Data Type</TableHead>
                <TableHead className="w-[40%]">Format</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">id</TableCell>
                <TableCell>uuid</TableCell>
                <TableCell>uuid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">user_id</TableCell>
                <TableCell>uuid</TableCell>
                <TableCell>uuid</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">title</TableCell>
                <TableCell>text</TableCell>
                <TableCell>text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">image</TableCell>
                <TableCell>text</TableCell>
                <TableCell>text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">songs</TableCell>
                <TableCell>ARRAY</TableCell>
                <TableCell>_text</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">duration</TableCell>
                <TableCell>double precision</TableCell>
                <TableCell>float8</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">created_at</TableCell>
                <TableCell>timestamp with time zone</TableCell>
                <TableCell>timestamptz</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div>
        <h5 className="text-highlight mb-1">Storage</h5>
        <p>
          I used <strong>Supabase Storage</strong> to store songs and images, it
          called <strong>bucket</strong> so i have two buckets are songs and
          images.
        </p>
        <Image
          src={images.imgSupabaseBucket}
          alt=""
          className="w-64 h-auto cursor-pointer rounded-md m-2"
          onClick={() => {
            openVFS();
          }}
        />
      </div>
      <div>
        <h5 className="text-highlight mb-1">Data Fetching</h5>
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
      <MoreInfoModal
        isOpen={isOpenModal}
        onClose={() => setIsOpenModal(false)}
        title="Users Table"
      >
        <div className="flex flex-col gap-y-2">
          <p className="text">
            The <strong>users</strong> table above is in Supabase&apos;s{" "}
            <u>public</u> schema, Supabase has another schema named <u>auth</u>{" "}
            and another table named <strong>users</strong> in it, which is used
            for authentication.
          </p>
          <p>
            <strong>users</strong> in <u>public</u> will be automatically
            created when we create an account. {"("}Based on{" "}
            <strong>users</strong> in <u>auth</u> and some triggers we definded
            when creating this <strong>users</strong> table{")."}
          </p>
        </div>
      </MoreInfoModal>
    </section>
  );
};
