import { useMemo } from "react";

//veri çekme query /  veri silme ,ekleme, güncelleme motation.
import { useQuery, useMutation, useQueryClient } from "react-query";
import { fetchProductList, deleteProduct , fetchProductNonePageLimit } from "../../../api";
import { Table, Popconfirm } from "antd";
import { Text, Button, Flex } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { NavLink } from "react-router-dom";

function Products() {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery(
    "admin:products",
    fetchProductNonePageLimit
  );

  const deleteMutation = useMutation(deleteProduct, {
    //admin:products bu key'in ait oldugu query bastan calısacak , silinen ürün gelmedigi içicn görünmeyecek. Yani biz refresh yapmadan direk sayfadan ürünü kaldırması icin yazdık.

    //en dıştaki index.js de queryclient'a erişiyoruz burada. Bu sayede sayfayı refresh etmez.
    onSuccess: () => queryClient().invalidateQueries("admin:products"),
  });

  //ant design istediği column örnegi.
  //sayfa her render oldugunda column tekrar hesaplanmasın diye useMemo kullanıyoruz.
  const columns = useMemo(() => {
    return [
      {
        title: "ÜRÜN",
        dataIndex: "title",
        key: "title",
      },
      {
        title: "FİYAT",
        dataIndex: "price",
        key: "price",
      },
      {
        title: "EKLENME TARİHİ",
        dataIndex: "createdAt",
        key: "createdAt",
      },
      {
        title: "DÜZENLE & SİL",
        key: "action",
        render: (record) => (
          <>
            <NavLink to={`/admin/products/${record.id}`}>
              <EditIcon color="#84A59D" />
            </NavLink>
            <Popconfirm
              title="Silmek istediğinize emin misiniz?"
              //useMutation altında mutate geliyor, record id ise hangi ürünü sileceksen onun id'si geliyor.
              onConfirm={() => {
                deleteMutation.mutate(record.id, {
                  onSuccess: () => {
                    console.log("silindi");
                  },
                });
              }}
              onCancel={() => alert("Silme iptal edildi")}
              okText="Evet"
              calcelText="Hayır"
              placement="left"
            >
              <button type="button" style={{ marginLeft: 10 }}>
                <DeleteIcon color="#4a5568" />
              </button>
            </Popconfirm>
          </>
        ),
      },
    ];
  }, [deleteMutation]);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error {error.message}</div>;

  console.log("admin/products data:", data);

  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center">
        <Text fontSize="2xl" p="5">
          Ürünler
        </Text>

        <NavLink to="/admin/products/new">
          <Button>Yeni Ürün Ekle</Button>
        </NavLink>
      </Flex>

      <Table dataSource={data} columns={columns} rowKey="id" />
    </div>
  );
}

export default Products;
