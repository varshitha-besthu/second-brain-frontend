export const LinkRender = ({link, title}: {link: string, title: string}) => {
    return (
      <div className="max-w-64">
        <div className=" truncate">
          {title}
        </div>
        <div className="max-w-64 break-words text-sm text-blue-700 underline">
          <a href={link} >{link}</a>
        </div>
      </div>
    )
  }