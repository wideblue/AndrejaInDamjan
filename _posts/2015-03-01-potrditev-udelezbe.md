---
title: "Udeležba"
bg: "#A9B8BA"
color: white
---
<div class="left" ng-controller="udelezbaFormCtrl">


    <form udelezba >
            <!--action="https://docs.google.com/forms/d/1lWsTyjTo8Y8gZm4_Fv7l9Xk_u_bBDUqag9AStP1zWwc/formResponse" method="POST" id="ss-form" target="_self" onsubmit=""-->

            <label class="ss-q-item-label" for="entry_1877724574">
                <div class="ss-q-title">Ime</div>
            </label>

            <input ng-model="svat.ime" type="text" name="entry.1877724574" value="" class="ss-q-short" id="entry_1877724574" dir="auto"
                   aria-label="Ime   " aria-required="true" required="" title="">

            <label class="ss-q-item-label" for="entry_1189026553">
                Priimek
            </label>
            <input ng-model="svat.priimek" type="text" name="entry.1189026553" value="" class="ss-q-short" id="entry_1189026553" dir="auto"
                   aria-label="Priimek  " aria-required="true" required="" title="">

            <label class="ss-q-item-label" for="entry_1759000815">
                <div class="ss-q-title">Udeležba</div>
            </label>
            <select ng-model="svat.udelezba"  name="entry.1759000815" id="entry_1759000815" aria-label="Udeležba   " aria-required="true"
                    required="">
                <option value=""></option>
                <option value="Potrjujem udeležbo">Potrjujem udeležbo</option>
                <option value="Ne morem priti">Ne morem priti</option>
            </select>

            </label>

            <ul class="ss-choices" role="group" aria-label="  ">
                <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block">
                    <input
                        ng-model="svat.spremljevalec"
                        type="checkbox"
                        name="entry.1660517646"
                        value="Pridem s partnerjem/spremljevalcem"
                        id="group_1660517646_1"
                        role="checkbox"
                        class="ss-q-checkbox"></span>
                    <span class="ss-choice-label">Pridem s partnerjem/spremljevalcem</span>
                </label></li>
            </ul>

            <label class="ss-q-item-label" for="entry_1310196768">
                <div class="ss-q-title">Ime partnerja ali spremljevaleca
                </div>
            </label>
            <input ng-model="svat.spremljevalecIme"  type="text" name="entry.1310196768" value="" class="ss-q-short" id="entry_1310196768" dir="auto"
                   aria-label="Ime partnerja ali spremljevaleca  " title="">
            <ul class="ss-choices" role="group" aria-label="  ">
                <li class="ss-choice-item"><label><span class="ss-choice-item-control goog-inline-block">
                    <input
                        ng-model="svat.otroci"
                        type="checkbox"
                        name="entry.1548427153"
                        value="Pridem z otroki"
                        id="group_1548427153_1"
                        role="checkbox"
                        class="ss-q-checkbox"></span>
                    <span class="ss-choice-label">Pridem z otroki</span>
                </label></li>
            </ul>

            <label class="ss-q-item-label" for="entry_26859280">
                <div class="ss-q-title">Število otrok
                </div>
                <div class="ss-q-help ss-secondary-text" dir="ltr"></div>
            </label>
            <input ng-model="svat.otrociStevilo"  type="number" name="entry.26859280" value="" class="ss-q-short" id="entry_26859280" dir="auto"
                   aria-label="Število otrok  Biti mora število, večje od 0" step="any"
                   title="Biti mora število, večje od 0">


            <input type="hidden" name="draftResponse" value="[,,&quot;3491103141126268273&quot;]">
            <input type="hidden" name="pageHistory" value="0">


            <input type="hidden" name="fbzx" value="3491103141126268273">

            <input type="submit"  ng-click="update(svat)" value="Pošlji" id="ss-submit" class="jfk-button jfk-button-action ">
        </form>

</div>
<div class="right">
     <h3> Potrditev udeležbe </h3>

     Prosiva, da udeležbo potrdite najkasneje do 31. maja 2015 s pomočjo spletnega obrazca ali na telefonsko številko 041735768 (Andreja) ali 040321355 (Damjan) oz. na e-poštni naslov akuzman@gmail.com oz. bigwideblue@gmail.com.
</div>
