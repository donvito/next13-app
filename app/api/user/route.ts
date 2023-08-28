import { NextResponse } from 'next/server'

export async function GET(request: Request) {

    let data = {
        "name": "Eloise anderson",
        "age": 46
    }

    console.log(data)

    return NextResponse.json({ data })
}