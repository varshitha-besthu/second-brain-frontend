export const LinkRender = ({link, title}: {link: string, title: string}) => {
    return (
      <div className="max-w-64">
        <div className="text-purple-600 truncate">
          {title}
        </div>
        <div className="max-w-64 break-words text-sm text-gray-500">
          {link}
        </div>
      </div>
    )
  }