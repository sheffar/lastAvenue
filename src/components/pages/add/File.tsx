import DragDrop from './DragDrop'
import { cn } from '@/utils/helpers'

type Props = {
    className?: string
}

export default function File({ className }: Props) {
    return (
        <div className={cn(className)} >
            <DragDrop />
        </div>
    )
}
