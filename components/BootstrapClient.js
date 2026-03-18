"use client"

import { useEffect, useState } from "react"

const BootstrapClient = () => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
        require('bootstrap/dist/js/bootstrap.bundle.min.js')
    }, [])

    if (!mounted) {
        return null
    }

    return null
}

export default BootstrapClient