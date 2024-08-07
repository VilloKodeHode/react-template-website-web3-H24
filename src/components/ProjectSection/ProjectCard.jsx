export const ProjectCard = ({src, description, title,}) => {
    return (
        <div className="bg-slate-500 w-64">
        <h3 className="p-4 text-white font-semibold text-xl">{title}</h3>
        <figure className="h-36">
          <img src={src} alt="" className="h-full w-full  object-cover" />
        </figure>
        <p className="p-4">{description}</p>
      </div>
    )
}