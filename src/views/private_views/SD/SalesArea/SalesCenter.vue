<template>
  <div id="sales-center" class="sales-center">
    <Heading :pathName="pathName" :routeName="routeName" />
    <PaginationSection
      :pagingStart="pageDataStart"
      :pagingEnd="pageDataEnd"
      :totalPage="totalPagesData"
      :routeName="routeName"
      v-on:print="onPrintClick"
      v-on:excel="onExcelClick"
    />
  </div>
</template>

<script>
import Heading from "../../../../components/private_view_components/ADM/SBU/Heading-section";
import PaginationSection from "../../../../components/private_view_components/ADM/SBU/PaginationSidebarSection";

export default {
  components: {
    Heading,
    PaginationSection,
  },
  data() {
    return {
      routeName: "Sales Center",
      parentPath: "Settings & Management",
      currentRoute: this.$route.name,
      pathName: null,
      pageDataStart: 1,
      pageDataEnd: 12,
      totalPagesData: 1003,
    };
  },
  created() {
    this.$emit("routeName", this.$route.name);
    this.createBreadcrumbData();
  },
  methods: {
    createBreadcrumbData() {
      this.pathName = [{ name: "Settings & Management" }, { name: "Sales Center" }];
    },
    // sisterConcernClick(id) {
    //   console.log(id);
    //   console.log(this.sub_data[id]);
    //   this.pathName += " > Sister Concern";
    //   this.$router.replace(
    //     "/adm/settings&management/sbu/sbu-sister-concern:" + id
    //   );
    // },
    onPrintClick() {
      // this.$htmlToPaper("cont", env.printOption, () => {
      //   console.warn("done");
      // });
      //   customJs.test(this.sub_data)
    },
    onExcelClick() {
      //   console.log(this.sub_data)
      // let rows = [];
      // let columnHeader = ['NAME', 'ID NUMBER', 'SISTER CONCERN', 'ACTIVE USER', 'STATUS'];
      // let pdfName = 'Schedule';
      // this.sub_data.forEach(element => {
      //     var temp = [
      //         element.name || '',
      //         element.id_number || '',
      //         element.sister_concern || '',
      //         element.active_user || '',
      //         element.status || '',
      //     ];
      //     rows.push(temp);
      // });
      // var doc = new jsPDF('p', 'pt');
      // doc.autoTable(columnHeader, rows);
      // doc.save(pdfName + '.pdf');
    },
  },
};
</script>

<style scoped>
</style>