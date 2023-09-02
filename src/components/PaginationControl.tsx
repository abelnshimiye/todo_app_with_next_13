'use client'
import React, {FC} from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlProps {
    hasNextPage: boolean
    hasPrevPage: boolean
}


const  PaginationControls: FC<PaginationControlProps> =(
    {
        hasNextPage,
        hasPrevPage,
    }
) => {

    const router = useRouter()
    const searchParams = useSearchParams()

    const page = searchParams.get('page') ?? '1'
    const per_page = searchParams.get('per_page') ?? '5'


  return (
    <div className='flex gap-2'>
        <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasPrevPage}
        onClick={()=>{
            router.push(`serverpagination/?page=${Number(page) - 1}&per_page=${per_page}`)
        }}
        >
            Prev Page
        </button>

        <div>
            {page} /{Math.ceil(10/Number(per_page))}
        </div>

        <button
        className='bg-blue-500 text-white p-1'
        disabled={!hasNextPage}
        onClick={()=>{
            router.push(`serverpagination/?page=${Number(page) + 1}&per_page=${per_page}`)
        }}
        >
            Next Page
        </button>
      
    </div>
  )
}
export default  PaginationControls
