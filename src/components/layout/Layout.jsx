import React, { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import CardForm from "../organisms/CardForm";
import { X, Menu } from "lucide-react";

const Layout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Bar */}
      <header className="fixed top-0 left-0 right-0 bg-background border-b p-4 z-20">
        <div className="flex justify-between items-center">
          <div className="flex gap-4 justify-center items-center">
            <img src="/lightlogo.png" className="h-10 w-10" alt="logo" />
            <div>
            <h2 className="text-md md:text-xl font-bold">Card Generator</h2>
            <p className="text-xs md:text-sm font-bold">Developed by Team Find Web Developer (Bangladesh) <a target="_blank" className="text-blue-500 curosor-pointer border border-blue-500 rounded p-1" href="https://github.com/SmanSayeed/card-generator-react-application">Details</a></p>
            </div>
          
            </div>
          <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                {isDrawerOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[80%] sm:w-[385px] p-0">
              <ScrollArea className="h-full p-4">
                <CardForm />
              </ScrollArea>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Desktop Drawer */}
      <div className="hidden md:block fixed left-0 top-[65px] bottom-0 w-1/2 bg-background border-r p-4 overflow-hidden">
        <ScrollArea className="h-full">
          <CardForm />
        </ScrollArea>
      </div>

      {/* Content */}
      <main className="md:ml-[50%] pt-[65px] p-4">
        {children}
      </main>
    </div>
  );
};

export default Layout;