interface ProjectFiltersProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
  allLabel: string
}

const FilterButton = ({
  category,
  isActive,
  onClick,
}: {
  category: string
  isActive: boolean
  onClick: () => void
}) => (
  <button
    role="tab"
    aria-selected={isActive}
    onClick={onClick}
    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
      isActive
        ? "bg-primary text-primary-foreground shadow-md"
        : "bg-card border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary"
    }`}
  >
    {category}
  </button>
)

const ProjectFilters = ({ categories, activeCategory, onCategoryChange, allLabel }: ProjectFiltersProps) => (
  <div className="flex flex-wrap justify-center gap-2 mb-8 sm:mb-12" role="tablist">
    <FilterButton category={allLabel} isActive={activeCategory === "All"} onClick={() => onCategoryChange("All")} />
    {categories
      .filter((cat) => cat !== "All")
      .map((cat) => (
        <FilterButton
          key={cat}
          category={cat}
          isActive={activeCategory === cat}
          onClick={() => onCategoryChange(cat)}
        />
      ))}
  </div>
)

export default ProjectFilters
