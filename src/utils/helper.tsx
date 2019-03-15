import React, { ComponentType } from 'react'

export const nest = (...components: ComponentType<any>[]) => (props: any = {}) =>
    components.reduceRight(
        (children, Current) => <Current {...props}>{children}</Current>,
        props.children
    )
