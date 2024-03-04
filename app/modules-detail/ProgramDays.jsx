'use client'
import { useState } from 'react'
import Text from '../components/Text'
import Image from 'next/image'
import Link from 'next/link'
import right_arrow from '@/assets/icons/right_arrow.png'
import line from '@/assets/icons/line.png'
import expend from '@/assets/icons/expend.png'
import Program from './Program'

const ProgramDays = ({ data }) => {
  const [openedProgram, setOpenedProgram] = useState(data[0].id)

  const handleOpen = (id) => {
    if (id === openedProgram) setOpenedProgram(null)
    else setOpenedProgram(id)
  }

  return (
    <div className="w-[751px] max-md:w-[420px] max-sm:w-[300px]">
      {data.map((items) => {
        return (
          <div key={items.id}>
            <div className="border-b-2 border-black pb-5 pt-5 flex justify-between">
              <Text>{items.date}</Text>
              {openedProgram === items.id ? (
                <div
                  className="w-[30px] h-[30px] p-2 bg-black flex items-center rounded-full"
                  onClick={() => handleOpen(items.id)}
                >
                  <Image src={line} alt="Line" />
                </div>
              ) : (
                <div
                  className="w-[30px] h-[30px] p-2 bg-black flex items-center rounded-full"
                  onClick={() => handleOpen(items.id)}
                >
                  <Image src={expend} alt="Expend" />
                </div>
              )}
            </div>
            <div
              className={`transition-opacity duration-300 ${
                openedProgram === items.id ? '' : 'hidden'
              }`}
            >
              <div
                className={
                  items?.programsDetail
                    ? 'border-b-2 border-black pt-5 pb-5'
                    : ''
                }
              >
                {items?.programsDetail?.map((program) => (
                  <Program
                    key={program.id}
                    id={program.id}
                    time={program.time}
                    title={program.title}
                  />
                ))}
              </div>
              <div
                className={
                  items?.programSortDetail
                    ? 'border-b-2 border-black pt-5 pb-5'
                    : ''
                }
              >
                {items?.programSortDetail?.map((program) => (
                  <Program
                    key={program.id}
                    id={program.id}
                    time={program.time}
                    title={program.title}
                    info={program.info}
                  />
                ))}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProgramDays
