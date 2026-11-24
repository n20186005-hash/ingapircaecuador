import Place, {placeMetadata} from '@/components/RegionalPlace';
type Input = {params: Promise<{locale:string}>};
const withSlug = ({params}:Input) => ({params:params.then(p=>({...p,slug:"burgay"}))});
export const generateMetadata = (input:Input) => placeMetadata(withSlug(input));
export default function Page(input:Input) { return <Place {...withSlug(input)}/>; }
