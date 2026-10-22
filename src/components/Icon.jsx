function Icon({ name = 'arrow', ...props }) {
  const paths = {
    arrow: <path d="M5 12h14m-6-6 6 6-6 6" />,
    external: <path d="M7 17 17 7M7 7h10v10" />,
    download: <path d="M12 3v12m-4-4 4 4 4-4M5 16v5h14v-5" />,
    code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" /></>,
  }
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{paths[name] || paths.arrow}</svg>
}

export default Icon
