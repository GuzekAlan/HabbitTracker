import { Skeleton } from "@/components/shadcn/ui/skeleton";

function NotFound() {
    return (
        <div className="flex justify-center items-center w-full h-screen gap-5">
            <Skeleton className="rounded-full py-5 px-10">
                <h1 className="text-3xl">404: Not Found</h1>
            </Skeleton>
        </div>
    )
}

export default NotFound;