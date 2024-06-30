import { ChangeEvent } from 'react';
import { SearchInput } from '../../shared/ui/search_input/SearchInput';
import { PartialFilterState } from '../../shared/module/filter/filterSlice';

interface SearchWidgetProps {
	search: string;
	onChange(options: PartialFilterState): void;
}

export const SearchWidget: React.FC<SearchWidgetProps> = ({
	search,
	onChange,
}) => {
	const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange({ search: e.target.value });
	};
	return (
		<SearchInput
			name='search'
			value={search}
			placeholder='Название фильма'
			onChange={handleSearchChange}
		>
			Поиск
		</SearchInput>
	);
};
