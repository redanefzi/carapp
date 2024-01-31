
import type { Title } from '#build/components';
<template>
    <div key={link.title} className="footer__link">
        <h3 className="font-bold">{{props.title}}</h3>
        {link.links.map((item) => (
        <Link key={item.title} href={item.url} className="text-gray-500">
        {{props.title}}
        </Link>
        ))}
    </div>
</template>

<script setup lang="ts">
interface test { label: string, link: string }
const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    links:    {
    type: Array as PropType<test[]>,
    default: [],
  },
});
</script>

<style lang="scss" scoped></style>