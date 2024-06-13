import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "./shadcn/ui/breadcrumb";

function Header() {
  return (
    <div className="w-full flex flex-row justify-center p-2">
        <Breadcrumb className="border border-foreground px-4 py-2 rounded-xl">
            <BreadcrumbList className="text-2xl text-primary hover:text-secondary">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <Separator />
                <BreadcrumbItem>
                    <BreadcrumbLink href="/create_habit">Create Habit</BreadcrumbLink>
                </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>
    </div>
  );
}

function Separator() {
    return (
        <BreadcrumbSeparator className="text-foreground">
            / 
        </BreadcrumbSeparator>
    )
}

export default Header;