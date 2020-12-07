<template>
  <div class="create-new-sbu">
    <Heading :pathName="pathName" :routeName="routeName" />
  </div>
</template>

<script>
import Heading from "../../../components/private_view_components/ADM/SBU/Heading-section";

export default {
  components: {
    Heading,
  },
  data() {
    return {
      routeName: "Create New Strategic Business Unit (SBU)",
      parentPath: "Settings & Management",
      currentRoute: this.$route.name,
      pathName: null,
    };
  },
  created() {
    this.createBreadcrumbData();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [
        { name: "Settings & Management" },
        { name: "SBU" },
        { name: "Add New" },
      ];
    },
  },
};
</script>