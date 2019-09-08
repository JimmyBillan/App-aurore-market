import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import NavigationService from '../services/NavigationService';

const CategorieContainerAccueil = props => {

    const [categories, setCategories] = useState([
        {
            titre : "Epicerie",
            img : "https://auroremarket.fr/themes/ressources/img/categories/xcategorie_epicerie_opt.jpg.pagespeed.ic.Z4F4CZniwH.webp",
            id: "https://auroremarket.fr/s-1/categories_2-epicerie"
        },
        {
            titre : "Hygiène & Beauté",
            img : "https://auroremarket.fr/themes/ressources/img/categories/xcategorie_hygiene_et_beaute_opt.jpg.pagespeed.ic.LvT6lzKFUN.webp",
            id: "https://auroremarket.fr/s-1/categories_2-hygiene_et_beaute"
        },{
            titre : "Santé",
            img : "https://auroremarket.fr/themes/ressources/img/categories/xcategorie_sante_opt.jpg.pagespeed.ic.Rnj9kMrERg.webp",
            id: "https://auroremarket.fr/s-1/categories_2-sante"
        },{
            titre : "Bébés et enfants",
            img : "https://auroremarket.fr/themes/ressources/img/categories/xcategorie_bebes_et,P20enfants_opt.jpg.pagespeed.ic.WVHSk0JpHZ.webp",
            id: "https://auroremarket.fr/s-1/categories_2-bebe_et_enfant"
        },{
            titre : "Tout pour la maison",
            img : "https://auroremarket.fr/themes/ressources/img/categories/xcategorie_maison_opt.jpg.pagespeed.ic.OKC57d5qbw.webp",
            id: "https://auroremarket.fr/s-1/categories_2-tout_pour_la_maison"
        },{
            titre : "Vêtements",
            img : "https://auroremarket.fr/themes/ressources/img/categories/xcategorie_vetement_opt.jpg.pagespeed.ic.p4AX-9fv3P.webp",
            id: "https://auroremarket.fr/s-1/categories_2-vetements"
        },{
            titre : "Vrac",
            img : "https://auroremarket.fr/themes/ressources/img/categories/xcategorie_vrac_opt.jpg.pagespeed.ic.LzTeOLYdqU.webp",
            id: "https://auroremarket.fr/s-1/categories_2-vrac"
        },{
            titre : "Nouveautés",
            img : "https://i.imgur.com/n8Ax4Er.png",
            id: "https://auroremarket.fr/s-1/nouveaux_produits-oui"
        },
    ]);

    
    function navigateToCategorie(id){       
        NavigationService.navigateToCategorie(id);
    }

    return (
        <View style={{alignItems: 'center', marginBottom:15}}>  
            <View style={styles.viewTitrenotfirst}>
                <Text style={styles.titre}>Naviguer par catégories</Text>
            </View>

            <View style={{width:"100%"}}>
                {
                    categories.map((item, key) =>
                        <View key={key} style={styles.itemScroll}>
                            <TouchableOpacity onPress={() =>{ navigateToCategorie(item.id); }}>
                                <View style={styles.container} >

                                    <View style={{flex:1, height: 50 }}>
                                        
                                            <Image
                                                style={{ height: 50 }}
                                                resizeMode="contain"
                                                source={{ uri: item.img }}
                                            />
                                    </View>
                                    <View style={styles.catTitreCont}>                                    
                                        <Text style={styles.catTitre}>{item.titre}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        
            
        </View>
    )
}

const styles = StyleSheet.create({
    viewTitrenotfirst: {
        alignItems: 'center',
        paddingTop:20,
        paddingBottom: 30
    },
    titre: {
        fontSize: 27,
        fontWeight: 'bold'
    },
    container: {
        flexDirection: 'row',
        alignItems:'flex-start',
        borderColor: "#f1f1f1",
        padding: 10,
        borderWidth: 1,
        width: '90%',
        marginLeft:'5%',
        height : 84,
        marginTop : 15
    },
    catTitreCont : {flex:2,height: "100%", justifyContent:'center'},
    catTitre : {fontWeight:'bold',fontSize:16}
})

export default CategorieContainerAccueil;