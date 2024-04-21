import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import React from 'react'

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
        <Card>
            <CardHeader>
                <h1>Who to follow</h1>
            </CardHeader>
            <CardBody>
            </CardBody>
            <CardFooter>
                <Button color="primary" radius="sm">View more</Button>
            </CardFooter>
        </Card>
    </>
  )
}

export default FollowSidebar