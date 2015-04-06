---
title: "Udeležba"
bg: "#26323E"
color: white
---
<div class="left" ng-controller="udelezbaFormCtrl">

    <script type="text/javascript">var submitted=false;</script>
        <iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"
    onload="if(submitted) {window.location='/#potrditev-udelezbe?submitted=true';}"></iframe>
          <form action="https://docs.google.com/forms/d/1lWsTyjTo8Y8gZm4_Fv7l9Xk_u_bBDUqag9AStP1zWwc/formResponse" method="post" target="hidden_iframe"
    onsubmit="submitted=true;">
    <!--<form  class="css-form" udelezba action="https://docs.google.com/forms/d/1lWsTyjTo8Y8gZm4_Fv7l9Xk_u_bBDUqag9AStP1zWwc/formResponse" method="POST" id="ss-form" target="_self" onsubmit="">-->
      <div class="col-2">
                  <label for="entry_1877724574">
                      Ime *
                      <input ng-model="svat.ime" type="text" name="entry.1877724574" value="" class="ss-q-short"
                             id="entry_1877724574" dir="auto"
                             aria-label="Ime   " aria-required="true" required="" title="">
                  </label>
              </div>
              <div class="col-2">
                  <label class="ss-q-item-label" for="entry_1189026553">
                      Priimek *
                      <input ng-model="svat.priimek" type="text" name="entry.1189026553" value="" class="ss-q-short"
                             id="entry_1189026553" dir="auto"
                             aria-label="Priimek  " aria-required="true" required="" title="">
                  </label>
              </div>

              <div class="col-3 switch">
                  <label class="ss-q-item-label" for="entry_1759000815">
                      Pridem: [{[(svat.udelezba) ? " Da": " Ne";]}]
                      <input ng-model="svat.udelezba" type="checkbox" name="entry.1759000815" value="Da" id="entry_1759000815"
                             role="checkbox" class="js-switch"
                             checked>
                  </label>
              </div>

              <div class="col-3 switch"  >

                          <label> V dvoje: [{[(svat.spremljevalec) ? " Da": " Ne";]}]
                          <input
                                  ng-model="svat.spremljevalec"
                                  type="checkbox"
                                  name="entry.1660517646"
                                  value="Da"
                                  id="entry_1660517646"
                                  role="checkbox"
                                  class="js-switch">
                          </label>

              </div>

              <div class="col-3 switch" >
                  <label> Z otroki: [{[(svat.otroci) ? " Da": " Ne";]}]
                  <input
                          ng-model="svat.otroci"
                          type="checkbox"
                          name="entry.1548427153"
                          value="Da"
                          id="entry_1548427153"
                          role="checkbox"
                          class="js-switch">
                  </label>



              </div>

              <div class="col-2">
                  <label  for="entry_1310196768">
                      Ime partnerja
                      <input class = "css-form"
                             ng-disabled="!svat.spremljevalec"
                             ng-model="svat.spremljevalecIme" type="text" name="entry.1310196768" value=""
                             id="entry_1310196768" dir="auto"
                             aria-label="Ime partnerja ali spremljevaleca  " title="">
                  </label>
              </div>


              <div class="col-2">
                  <label  for="entry_26859280">
                      Število otrok
                      <input class = "css-form"
                             ng-disabled="!svat.otroci"
                             ng-model="svat.otrociStevilo" type="text" name="entry.26859280" value=""
                             id="entry_26859280" dir="auto"
                             aria-label="Število otrok  Biti mora število, večje od 0" step="any"
                             title="Biti mora število, večje od 0">
                  </label>
              </div>

              <input type="hidden" name="draftResponse" value="[,,&quot;3491103141126268273&quot;]">
              <input type="hidden" name="pageHistory" value="0">


              <input type="hidden" name="fbzx" value="3491103141126268273">

              <div class="col-submit">
                  <input type="submit" name="submit" value="Pošlji" id="ss-submit" class="jfk-button jfk-button-action ">

              </div>

    </form>
    <span> <h3>[{[zahvala]}] </h3></span>

</div>
<div class="right">
     <h3> Potrditev udeležbe </h3>

     <p> Prosiva, da udeležbo potrdite najkasneje do 31. maja 2015 s pomočjo spletnega obrazca ali na telefonsko številko 041735768 (Andreja) ali 040321355 (Damjan) oz. na e-poštni naslov akuzman@gmail.com oz. bigwideblue@gmail.com. </p>
</div>
