<script setup lang="ts">
const props = defineProps<{ address: string; members?: string[] }>();

const isCore = computed(() => {
  if (!props.members) return false;
  const members = props.members.map(address => address.toLowerCase());
  return members.includes(props.address.toLowerCase());
});
</script>

<template>
  <div
    v-if="isCore"
    class="ml-1 rounded-full border px-[7px] text-xs text-skin-text leading-[22px]"
  >
    {{ $t('isCore') }}
  </div>
</template>
