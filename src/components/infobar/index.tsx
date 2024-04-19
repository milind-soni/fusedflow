'use client'
import React, { useEffect } from 'react'
import { Book, Headphones, Link, Search } from 'lucide-react'


import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

type Props = {}

const InfoBar = () => {
    // Handler for redirecting to the external URL
    const redirectToWorkbench = () => {
      window.location.href = 'https://www.fused.io/workbench';
    };
  
    return (
        <div className="flex flex-row justify-end gap-6 items-center px-4 py-4 w-full dark:bg-black">
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <div onClick={redirectToWorkbench} className="cursor-pointer">
                  <Book />
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Open in Workbench</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      );
    };
    
  export default InfoBar;