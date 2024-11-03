 <template>
  <Mug>
    <Cold v-if="isIced" />
    <Hot v-else />
    <Contents>
      
      <template v-slot:top v-if="creamerColor !== 'transparent' && syrupColor === 'transparent'">
        <Creamer :creamerColor="creamerColor" />
      </template>

      <template v-slot:top v-if="creamerColor !== 'transparent'">
        <Creamer :creamerColor="creamerColor" />
      </template>
      
      
      <template v-slot:mid v-if="syrupColor !== 'transparent'">
        <Syrup :syrupColor="syrupColor" />
      </template>

      <template v-slot:bottom>
        <Base :baseColor="baseColor" />
      </template>
    </Contents>
  </Mug>
</template> 

<script setup lang="ts">
import Contents from "./Contents.vue";
import Mug from "./Mug.vue";
import Syrup from "./Syrup.vue";
import Base from "./Base.vue";
import Creamer from "./Creamer.vue";
import Hot from "./Hot.vue";
import Cold from "./Cold.vue";

type Props = {
  isIced: boolean;
  creamerColor: string;
  syrupColor: string;
  baseColor: string;
};

const props = defineProps<Props>();
</script>
