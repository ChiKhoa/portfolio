"use client";

import { useState } from "react";
import { MoreInfoModal } from "@/components/more-info-modal";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const SectionAboutApplication = () => {
  const [isOpenFormatType, setIsOpenFormatType] = useState<boolean>(false);

  return (
    <>
      <section className="flex flex-col gap-y-5 mb-10">
        <h3 className="text-highlight underline text-xl font-medium">
          About application
        </h3>
        <div>
          <h5 className="text-[1.0625rem] text-highlight mb-1">
            Short description
          </h5>
          <p className="indent-4">
            This is a small project that allows me to explore other technologies
            like Remix. I also used Thin Backend, which worked great, but
            something went wrong, so I had to port to Aiven.io and Prisma ORM.
            In addition, I am learning about working with cookies and gaining a
            deeper understanding of React and some JavaScript tasks that I had
            not worked with in previous projects.
          </p>
          <p className="indent-4">
            You can write a blog, share your own story, present your ideas with
            rich text, checkbox and images without an account.
          </p>
          <p className="indent-4">
            {`Also you can edit your published post or delete it, this web app will save your draft if you close the tab when writing the post but don't publish it (all will work if you don't delete your cookies previously).`}
          </p>
        </div>
        <div>
          <h5 className="text-[1.0625rem] text-highlight mb-1">
            Authentication
          </h5>
          <p className="indent-4">
            The Thin Backend offers a product that supports authentication, but
            since the goal of this web application is to allow people to use its
            full functionality without logging in, creating a user account is
            not necessary. Instead, I will use cookies to determine article
            ownership.
          </p>
          <p className="indent-4">{`A cookie will be created when you publish your post or when you leave the write page while writing but not publishing it.`}</p>
        </div>
        <div>
          <h5 className="text-[1.0625rem] text-highlight mb-1">Database</h5>
          <p className="indent-4">
            {`I use Thin Backend's database product to store the tables, the database is extremely simple consisting of just two tables, `}
            <strong>cookie_users</strong> and <strong>posts</strong>.
          </p>
          <div className="my-4">
            <p className="font-medium">cookie_users</p>
            <Table className="my-2">
              <TableHeader className="bg-neutral-800">
                <TableRow>
                  <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                  <TableHead className="w-[30%]">Data Type</TableHead>
                  <TableHead className="w-[50%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">id</TableCell>
                  <TableCell>uuid</TableCell>
                  <TableCell>primary key, no default</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">editing_id</TableCell>
                  <TableCell>uuid | null</TableCell>
                  <TableCell>default null; unique</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="my-4">
            <p className="font-medium">posts</p>
            <Table>
              <TableHeader className="bg-neutral-800">
                <TableRow>
                  <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                  <TableHead className="w-[30%]">Data Type</TableHead>
                  <TableHead className="w-[50%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">id</TableCell>
                  <TableCell>uuid</TableCell>
                  <TableCell>primary key; default uuid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">post_data</TableCell>
                  <TableCell>jsonb</TableCell>
                  <TableCell>no default</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">cookie_id</TableCell>
                  <TableCell>uuid</TableCell>
                  <TableCell>no default</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
        <div>
          <h5 className="text-[1.0625rem] text-highlight mb-1">Content type</h5>
          <p className="indent-4">
            The content of the post contains multiple items with a different
            type, now I have four types of items which are{" "}
            <strong>blank</strong>, <strong>text</strong>,{" "}
            <strong>checkbox</strong> and <strong>image</strong>. Because there
            are different content types, I can just store content with type JSON
            in the database and define it in code.
          </p>
          <div className="my-4">
            <p className="font-medium">Blank item</p>
            <Table className="my-2">
              <TableHeader className="bg-neutral-800">
                <TableRow>
                  <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                  <TableHead className="w-[30%]">Data Type</TableHead>
                  <TableHead className="w-[50%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">id</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>uuid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">type</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>&quot;blank&quot;</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="my-4">
            <p className="font-medium">Text item</p>
            <Table className="my-2">
              <TableHeader className="bg-neutral-800">
                <TableRow>
                  <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                  <TableHead className="w-[30%]">Data Type</TableHead>
                  <TableHead className="w-[50%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">id</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>uuid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">type</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>&quot;text&quot;</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">content</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">format</TableCell>
                  <TableCell>object</TableCell>
                  <TableCell
                    className="underline cursor-pointer"
                    onClick={() => setIsOpenFormatType(true)}
                  >
                    FormatType
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">fontStyle</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>{`"h1" | "h2" | "h3" | "p"`}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="my-4">
            <p className="font-medium">Checkbox item</p>
            <Table className="my-2">
              <TableHeader className="bg-neutral-800">
                <TableRow>
                  <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                  <TableHead className="w-[30%]">Data Type</TableHead>
                  <TableHead className="w-[50%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">id</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>uuid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">type</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>&quot;checkbox&quot;</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">content</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">checked</TableCell>
                  <TableCell>boolean</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="my-4">
            <p className="font-medium">Image item</p>
            <Table className="my-2">
              <TableHeader className="bg-neutral-800">
                <TableRow>
                  <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                  <TableHead className="w-[30%]">Data Type</TableHead>
                  <TableHead className="w-[50%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">id</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>uuid</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">type</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>&quot;image&quot;</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">content</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">caption?</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">aspectRatio</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell>{`"auto" | "1/1" | "4/3" | "3/2" | "16/9"`}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">percentageWidth</TableCell>
                  <TableCell>string</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">cropPos</TableCell>
                  <TableCell>array</TableCell>
                  <TableCell>[number, number]</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="my-4">
            <p className="font-medium">Data type</p>
            <Table className="my-2">
              <TableHeader className="bg-neutral-800">
                <TableRow>
                  <TableHead className="min-w-[120px] w-[20%]">Name</TableHead>
                  <TableHead className="w-[30%]">Data Type</TableHead>
                  <TableHead className="w-[50%]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">currentIndex</TableCell>
                  <TableCell>number</TableCell>
                  <TableCell></TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">blockContent</TableCell>
                  <TableCell>array</TableCell>
                  <TableCell>
                    (BlankItem | TextItem | CheckboxItem | ImageItem)[]
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <p className="indent-4">
            <strong>Data Type</strong> is type of post data, which will be
            converted to JSON and then stored in <strong>posts</strong> table
            with name is <strong>post_data</strong>.
          </p>
        </div>
      </section>
      <MoreInfoModal
        isOpen={isOpenFormatType}
        onClose={() => setIsOpenFormatType(false)}
        title="Format type"
      >
        <Table className="my-2">
          <TableHeader className="bg-neutral-800">
            <TableRow>
              <TableHead className="min-w-[120px] w-[30%]">Name</TableHead>
              <TableHead className="w-[70%]">Data Type</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">bold</TableCell>
              <TableCell>boolean</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">underline</TableCell>
              <TableCell>boolean</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">italic</TableCell>
              <TableCell>boolean</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">strikeThrough</TableCell>
              <TableCell>boolean</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </MoreInfoModal>
    </>
  );
};
