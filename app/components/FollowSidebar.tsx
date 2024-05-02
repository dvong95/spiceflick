import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import React from 'react'
import UserFollow from './UserFollow'

const users = [
    {name: "Katherine McMaster", title: "Co-founder at ARMELO Engineering"},
    {name: "Asdf Qwerty", title: "dskljslkdjf"},
    {name: "Aswersf Tty", title: "dskljslkddddjf"},
    {name: "Asdf Qwessrty", title: "dskljhhghjslkdjf"},
    {name: "Asdf Qweggrty", title: "dskljddslkdjf"},
]

const FollowSidebar = () => {
  return (
    <>
        <Card className='h-fit'>
            <CardHeader>
                <h1 className='font-bold text-xl text-default-foreground'>Who to follow</h1>
            </CardHeader>
            <CardBody>
                {users.map((user, index) => <UserFollow key={index} />)}
            </CardBody>
            <CardFooter className='justify-center'>
                <Button radius="sm" className='w-full hover:bg-primary-500 hover:text-white'>View more</Button>
            </CardFooter>
        </Card>
    </>
  )
}

export default FollowSidebar