"use client";

import React from 'react'
import { IconMoon } from "@/public/icons/IconMoon";
import { IconSun } from "@/public/icons/IconSun";
import { Switch } from "@nextui-org/switch";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div>
      <Switch
      defaultSelected={resolvedTheme === 'light'}
      size="lg"
      startContent={<IconSun />}
      endContent={<IconMoon />}
      onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    ></Switch>
    </div>
  )
};