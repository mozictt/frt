<script setup>
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
const loading = ref(false)
let data = ref([])
const list = [
  {
    title: "Today"
  }, {
    title: "Week"
  }, {
    title: "Month"
  }, {
    title: "Year"
  }
]

let currentCategory = ref("today");

function generateRandomValue(number = 7) {
  let values = [];
  for (let j = 0; j < number + 1; j++) {
    values.push(Math.floor(Math.random() * 100));
  }
  data.value = values;
  return values;
}

const setCategory = (e) => {
  let v = e.target.innerText.toLowerCase();
  currentCategory.value = v
  if (v === 'today') generateRandomValue(24);
  if (v === 'week') generateRandomValue(7);
  if (v === 'month') generateRandomValue(31);
  if (v === 'year') generateRandomValue(365);
}

const cards = [
  {
    title: "Sales",
    progression: 12,
    amount: 1244.43,
    label: "View sales",
    description: "Sales of March 2024",
    icon: "solar:ticket-sale-outline"
  },
  {
    title: "Refunds",
    progression: 8,
    amount: 84.44,
    label: "View refunds",
    description: "Refunds since beginning of year",
    icon: "heroicons-outline:receipt-refund"
  },
  {
    title: "Payouts",
    progression: 14,
    amount: 899.99,
    label: "View payouts",
    description: "Payouts of this week",
    icon: "tabler:zoom-money"
  }
]

onMounted(() => {
  generateRandomValue(24);
})
</script>

<template>
  <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header
        class="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
        <div class="flex items-center gap-2 px-4">
          <SidebarTrigger class="-ml-1" />
          <Separator orientation="vertical" class="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem class="hidden md:block">
                <BreadcrumbLink href="#">
                  Building Your Application
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator class="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </header>
      <div class="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div class="grid auto-rows-min gap-4 md:grid-cols-3">
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
          <div class="aspect-video rounded-xl bg-muted/50" />
        </div>
        <div class="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
      </div>
    </SidebarInset>
    <div class="grid w-full gap-4">
      <main class="grid w-full gap-4 mt-[20px]">
        <h1>Dashboard</h1>
        <Tabs default-value="Today" class="w-full" @click="setCategory">
          <TabsList class="max-w-[400px]">
            <TabsTrigger v-for="item, index in list" :key="index" :value="item.title">
              {{ item.title }}
            </TabsTrigger>
          </TabsList>
          <TabsContent class="w-[100%]" v-for="item, index in list" :key="index" :value="item.title">
            <Chart v-if="data.length > 0" :currentCategory="currentCategory" :data="data" />
          </TabsContent>
        </Tabs>
      </main>
      <footer>
        <div class="grid gap-4 lg:grid-cols-3">
          <Cards v-for='(item, index) in cards' :card="item" :key='index' />
        </div>
      </footer>
    </div>
  </SidebarProvider>
</template>
