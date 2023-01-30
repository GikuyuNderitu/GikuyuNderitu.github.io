'use client';

import { ArrowDownIcon, MoonIcon, SunIcon } from '@heroicons/react/20/solid'
import { useDarkMode } from '@portfolio/components/theme';

export default function ThemeSelector() {
  const { toggleTheme } = useDarkMode();

  return <button
    onClick={toggleTheme}
    className="min-w-[48px] rounded border-black dark:border-white border-2 p-2 inline-flex flex-col items-center group">
    <ThemeDisplay />

  </button>
}

const hiddenClass = "transition-all opacity-0 group-active:opacity-100";

const hiddenArrow = "w-0 h-0 group-active:w-3 group-active:h-8 " + hiddenClass
const hiddenIcon = "w-0 h-0 group-active:w-5 group-active:h-5 " + hiddenClass

function ThemeDisplay() {
  const { theme } = useDarkMode();
  const isDark = theme == 'dark'

  return <>
    {isDark ?
      <MoonIcon
        className="w-6 h-6 fill-black dark:fill-white" /> :
      <SunIcon className="w-6 h-6 fill-yellow-400" />}
    <ArrowDownIcon className={hiddenArrow + " stroke-3 fill-black dark:fill-white mx-2"} />
    {isDark ?
      <SunIcon className={hiddenIcon + " fill-yellow-500"} /> : <MoonIcon className={hiddenIcon + " fill-black dark:fill-white"} />}
  </>
}