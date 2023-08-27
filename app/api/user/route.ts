import { NextResponse } from 'next/server'

export async function GET(request: Request) {

    let data = {
        "name": "Melvin Dave",
        "age": 30
    }

    console.log(data)

    return NextResponse.json({ data })
}