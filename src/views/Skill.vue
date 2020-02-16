<template>
  <div class="skill">
    <b-jumbotron text-variant="dark">
      <template slot="header">
        Skill
        <i class="fas fa-star"></i>
      </template>
    </b-jumbotron>
    <div class="row">
      <div class="col-sm-6 mb-3">
        <b-card>
          <h2>
            Front End
            <i class="fas fa-desktop"></i>
          </h2>
          <div class="text-center">
            <progressicon :val="3" iconsize="lg"/>
          </div>
          <b-card-text>フレームワークを用いた迅速な開発</b-card-text>
          <div slot="footer">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">React</th>
                  <td>
                    <progressicon :val="3" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Vue</th>
                  <td>
                    <progressicon :val="1" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Bulma</th>
                  <td>
                    <progressicon :val="3" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Bootstrap</th>
                  <td>
                    <progressicon :val="2" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">TypeScript</th>
                  <td>
                    <progressicon :val="4" iconsize="sm"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card>
      </div>
      <div class="col-sm-6 mb-3">
        <b-card>
          <h2>
            Back End
            <i class="fas fa-cogs"></i>
          </h2>
          <progressicon :val="2" iconsize="lg"/>
          <b-card-text>サービスに応じた多様な機能</b-card-text>
          <div slot="footer">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">Rails</th>
                  <td>
                    <progressicon :val="3" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Serverless</th>
                  <td>
                    <progressicon :val="2" iconsize="sm"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card>
      </div>
      <div class="w-100"></div>
      <div class="col-sm-6 mb-3">
        <b-card>
          <h2>
            Server
            <i class="fas fa-server"></i>
          </h2>
          <progressicon :val="2" iconsize="lg"/>
          <b-card-text>クラウド・コンテナによるスケーラビリティ（小〜中規模）</b-card-text>
          <div slot="footer">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">AWS</th>
                  <td>
                    <progressicon :val="3" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">GCP</th>
                  <td>
                    <progressicon :val="1" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Docker</th>
                  <td>
                    <progressicon :val="2" iconsize="sm"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card>
      </div>
      <div class="col-sm-6 mb-3">
        <b-card>
          <h2>
            Tool
            <i class="fas fa-wrench"></i>
          </h2>
          <progressicon :val="3" iconsize="lg"/>
          <b-card-text>プロジェクトの進行を加速</b-card-text>
          <div slot="footer">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">Slack</th>
                  <td>
                    <progressicon :val="4" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">GitHub</th>
                  <td>
                    <progressicon :val="2" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">CircleCI</th>
                  <td>
                    <progressicon :val="2" iconsize="sm"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card>
      </div>
      <div class="w-100"></div>
      <div class="col-sm-6 mb-3">
        <b-card>
          <h2>
            Qualification
            <i class="fas fa-certificate"></i>
          </h2>
          <progressicon :val="2" iconsize="lg"/>
          <b-card-text>資格</b-card-text>
          <div slot="footer">
            <table class="table table-striped">
              <tbody>
                <tr>
                  <th scope="row">応用情報技術者試験</th>
                  <td>
                    <progressicon :val="2" iconsize="sm"/>
                  </td>
                </tr>
                <tr>
                  <th scope="row">AWS SAA</th>
                  <td>
                    <progressicon :val="3" iconsize="sm"/>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import ProgressIcon from "../components/ProgressIcon.vue";
import Vue from "vue";

export default Vue.extend({
  components: {
    progressicon: ProgressIcon
  }
});
</script>


<style lang="scss">
@import "../styles/app.scss";
div.card-footer {
  background-color: $light;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: $gray-200;
}
</style>
