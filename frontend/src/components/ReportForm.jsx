import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import VictoryPieChart from "@/components/VictoryCharts/VictoryPie"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import TotalTransactions from "@/components/TotalTransactions"
const ReportForm = () => {
    return (
        <>
            <Carousel className="w-full flex justify-center">
                    <CarouselContent>
                        <CarouselItem>
                                <Card className='flex justify-center'>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center">
                                        <VictoryPieChart type={'income'}/>
                                        <h2 className="text-xl text-[#0097B2] dark:text-[#0097B2]">Income</h2>
                                        <div className="py-10 flex gap-1">
                                            <div className="border rounded-full w-2 h-2 bg-border"></div>
                                            <div className="border rounded-full w-2 h-2"></div>
                                        </div>
                                        <TotalTransactions type={'income'}/>
                                    </CardContent>
                                </Card>
                        </CarouselItem>
                        <CarouselItem>
                                <Card className='flex justify-center'>
                                    <CardContent className="flex flex-col aspect-square items-center justify-center">
                                        <VictoryPieChart type={'expense'}/>
                                        <h2 className="text-xl text-[#0097B2] dark:text-[#0097B2]">Expenses</h2>
                                        <div className="py-10 flex gap-1">
                                            <div className="border rounded-full w-2 h-2"></div>
                                            <div className="border rounded-full w-2 h-2 bg-border"></div>
                                        </div>
                                        <TotalTransactions type={'expense'}/>
                                    </CardContent>
                                </Card>
                        </CarouselItem>
                    </CarouselContent>
                </Carousel>
        </>
    )
}

export default ReportForm