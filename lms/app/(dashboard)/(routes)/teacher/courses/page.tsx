// import Link from "next/link";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { columns } from "./_components/columns";
import { DataTable } from "./_components/data-table";
// import { Button } from "@/components/ui/button";

const CoursePage = async () => {

    const { userId } = auth();

    if(!userId) return redirect("/");

    const courses = await db.course.findMany({
        where: {
            userId,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <>
            <div className="p-6">
                {/* <Link href="/teacher/create">
                    <Button>
                        New Course
                    </Button>
                </Link> */}

                <DataTable columns={ columns } data={ courses } />
            </div>
        </>
    );
}
 
export default CoursePage;